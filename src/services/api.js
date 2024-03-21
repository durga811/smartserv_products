export async function fetchData() {
    const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
    const data = await response.json();
    return data;
  }