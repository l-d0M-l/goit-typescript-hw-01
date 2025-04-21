import axios from "axios";
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

//тут важко зрозуміти що потрібно, адже я не розумію що буде передано в цю функцію. було би зручно якби давали приклад виклику даної ф-ції
export {};
