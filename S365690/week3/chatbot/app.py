from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set your OpenAI API key here
openai.api_key = 'nk-Rk3_Uhg!RMBg'

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question', '')

    if not question:
        return jsonify({'error': 'No question provided'}), 400

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o",  # or "gpt-3.5-turbo"
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": question},
            ]
        )
        answer = response.choices[0].message['content'].strip()
        return jsonify({'answer': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
