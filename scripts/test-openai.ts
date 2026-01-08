import OpenAI from 'openai';

async function testOpenAIKey() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey || apiKey === 'you-will-add-this-later') {
    console.error('❌ OPENAI_API_KEY is not set or still has placeholder value');
    console.log('\nPlease update your .env.local file with your actual OpenAI API key.');
    process.exit(1);
  }

  console.log('🔑 Testing OpenAI API key...\n');
  console.log(`API Key found: ${apiKey.substring(0, 7)}...${apiKey.substring(apiKey.length - 4)}\n`);

  try {
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    // Make a simple test request
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'user', content: 'Say "Hello! API key is working." in one sentence.' },
      ],
      max_tokens: 20,
    });

    const message = response.choices[0]?.message?.content;
    
    if (message) {
      console.log('✅ SUCCESS! Your OpenAI API key is working!\n');
      console.log(`Response: ${message}\n`);
      console.log('You can now use AI features in your journal entries!');
    } else {
      console.error('❌ Unexpected response from OpenAI');
      process.exit(1);
    }
  } catch (error: any) {
    console.error('❌ ERROR: Failed to connect to OpenAI\n');
    
    if (error.status === 401) {
      console.error('The API key is invalid or expired.');
      console.log('Please check your API key at https://platform.openai.com/api-keys');
    } else if (error.status === 429) {
      console.error('Rate limit exceeded. You may need to add billing to your OpenAI account.');
    } else if (error.message?.includes('API key')) {
      console.error('API key error:', error.message);
    } else {
      console.error('Error details:', error.message);
    }
    
    process.exit(1);
  }
}

testOpenAIKey();

