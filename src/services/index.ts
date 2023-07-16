import axios, { AxiosResponse } from 'axios';

const fetchImage = async (
  height?: number,
  width?: number
): Promise<AxiosResponse<unknown>> => {
  return axios.get(
    `https://picsum.photos/${height ? `${height}/` : ''}${width || ''}`
  );
};

export { fetchImage };
