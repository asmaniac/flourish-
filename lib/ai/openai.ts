import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface AnalysisResult {
  summary: string;
  patterns: string[];
  triggers: string[];
  insights: string[];
  recommendations: string[];
}

/**
 * Analyzes a journal entry and provides personalized insights
 */
export async function analyzeJournalEntry(
  content: string,
  previousEntries?: string[]
): Promise<AnalysisResult> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  // Build context from previous entries if available
  const contextPrompt = previousEntries && previousEntries.length > 0
    ? `\n\nPrevious journal entries for context:\n${previousEntries.slice(-5).join('\n\n---\n\n')}`
    : '';

  const systemPrompt = `You are a compassionate wellness AI assistant helping students understand their emotions and mental wellness patterns. 
Analyze journal entries with empathy and provide actionable, supportive insights. Focus on:
- Identifying emotional patterns and themes
- Recognizing potential stress triggers
- Offering constructive recommendations
- Being supportive and non-judgmental
- Using clear, accessible language`;

  const userPrompt = `Please analyze this journal entry and provide insights in the following JSON format:
{
  "summary": "A brief 2-3 sentence summary of the main themes and emotions",
  "patterns": ["Pattern 1", "Pattern 2", "Pattern 3"],
  "triggers": ["Potential trigger 1", "Potential trigger 2"],
  "insights": ["Insight 1", "Insight 2", "Insight 3"],
  "recommendations": ["Actionable recommendation 1", "Actionable recommendation 2"]
}

Journal entry to analyze:
${content}${contextPrompt}

Provide your analysis in valid JSON format only.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using the more affordable mini model
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const analysis = JSON.parse(responseContent) as AnalysisResult;

    // Validate the response structure
    if (!analysis.summary || !Array.isArray(analysis.patterns)) {
      throw new Error('Invalid analysis format from OpenAI');
    }

    return analysis;
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    if (error instanceof OpenAI.APIError) {
      throw new Error(`OpenAI API error: ${error.message}`);
    }
    throw new Error('Failed to analyze journal entry');
  }
}

/**
 * Analyzes mood patterns from multiple entries
 */
export async function analyzeMoodPatterns(
  moodData: Array<{ mood: number; stress?: number | null; date: string }>
): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  if (moodData.length < 3) {
    return 'Not enough data to analyze patterns. Keep tracking your mood to see insights!';
  }

  const systemPrompt = `You are a wellness AI assistant that analyzes mood tracking data to identify patterns and provide insights.`;

  const userPrompt = `Analyze this mood tracking data and provide a brief summary (2-3 sentences) of patterns you notice:
${JSON.stringify(moodData, null, 2)}

Focus on trends, correlations between mood and stress, and any notable patterns.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || 'Unable to analyze mood patterns.';
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return 'Unable to analyze mood patterns at this time.';
  }
}




