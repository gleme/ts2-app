import axios from './axios';

export async function findQuestions() {
  try {
    const { data } = await axios.get('../static/questions.json');
    return data;
  } catch (error) {
    throw error;
  }
}
