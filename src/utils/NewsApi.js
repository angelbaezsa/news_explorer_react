import { baseUrl, apiKey } from "./Constants";

const date = new Date();
const tempTo = date.toISOString();
date.setDate(date.getDate() - 7);
const tempFrom = date.toISOString();
const pageSize = 100;
const toDate = tempTo.slice(0, 10);
const fromDate = tempFrom.slice(0, 10);

export class NewsApi {
  constructor({ url }) {
    this.baseUrl = url;
  }

  processServerResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Error: ${res.status}`));
  };

  // `q=${keyword}&` + "from=2024-03-25&" + "sortBy=popularity&" + `${apiKey}`;

  getNews = (keyword) =>
    fetch(
      `${baseUrl}q=${keyword}&from=${fromDate}&to=${toDate}&pageSize=${pageSize}&apiKey=${apiKey}`,
      {
        method: "GET",
        headers: {
          authorization: `${apiKey}`,
        },
      }
    ).then(this.processServerResponse);
}

export const newsApi = new NewsApi({ baseUrl });
