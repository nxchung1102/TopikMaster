import axios from 'axios';
import {
  postDoneExamType,
  updateSectionType,
  AnswerSelectProps,
} from '../../util/GlobalType';

const api = axios.create({
  baseURL: 'https://api-dev.onluyen.io',
});
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im54Y2h1bmcxMTAyQGdtYWlsLmNvbSIsImVtYWlsQ29uZmlybWVkIjp0cnVlLCJpc0dvZE1vZGUiOmZhbHNlLCJhdmF0YXIiOiJodHRwczovL2RpeTY3dTJ1MHUzZWIuY2xvdWRmcm9udC5uZXQvYXZhdGFyLzY2YTQ2MTJjNzQwMTAyOGZjNzJkNDkyMi82NmE0NjEyYzc0MDEwMjhmYzcyZDQ5MjMuanBnIiwidXNlcklkIjoiNjZhNDYxMmM3NDAxMDI4ZmM3MmQ0OTIyIiwidXNlck5hbWUiOiJueGNodW5nMTEwMi50b3Bpa0BnbWFpbC5jb20iLCJpc1ZlcmlmaWVkIjp0cnVlLCJEaXNwbGF5TmFtZSI6ImNodW5nIG5ndXllbiIsIlByb3ZpbmNlSWQiOi0xLCJEaXN0cmljdElkIjotMSwiUGhvbmVOdW1iZXIiOiI4NDM2NzQ1OTc0MSIsIlBob25lQ291bnRyeSI6Ijg0IiwiU2Nob29sWWVhciI6MjAyNCwiY29kZUFwcCI6IlRPUElLIiwiUm9sZSI6IlNUVURFTlQiLCJHZW5kZXIiOiJOQU0iLCJDcmVhdGVCeVNjaG9vbCI6LTEsInByZW1pdW0iOmZhbHNlLCJjYW5DaGFuZ2VQYXNzd29yZCI6ZmFsc2UsInBhY2thZ2VzIjpbIlRPUElLLU9WRVJWSUVXIiwiVFAtTUFTVEVSMTEiLCJUUC1NQVNURVIyMiJdLCJpZE1peHBhbmVsIjoiJGRldmljZToxOTBmMjFiN2I2MDYwMi0wYzIyNjk0ZjM5NTYwZi0yNjAwMWY1MS0xMDAyMDAtMTkwZjIxYjdiNjA2MDMiLCJqdGkiOiJjYmJlZTBmMS0wMTBkLTQ1ZDctODFkZi1kMDAyNzUzOGVjNzYiLCJpYXQiOjE3Mjk1MDQzNjgsIm5iZiI6MTcyOTUwNDM2OCwiZXhwIjoxNzMyMDk2MzY4LCJpc3MiOiJFRE1JQ1JPIiwiYXVkIjoiT05MVVlFTi5WTiJ9.ToJgpVK12C9WeSxvu4QkdT-5U98LQrrr7ga9uj6pbI8`;

const header = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

export const getAllDataGroup = async () => {
  const res = await api.get('/topik/topik-exam/course/groups', header);
  return res?.data.data;
};

export const getCourseById = async (id: string) => {
  const res = await api.get(`/topik/topik-exam/group/${id}`, header);
  return res?.data.data;
};
export const getInfoExam = async (id: string) => {
  const res = await api.get(`/topik/topik-exam/info/${id}`, header);
  return res?.data;
};

export const getExamDoing = async (id: string) => {
  const res = await api.get(`/topik/topik-exam/detail/doing/${id}`, header);
  return res?.data;
};

export const postDone = async (id: string, data: postDoneExamType) => {
  const res = await api.post(`/topik/topik-exam/done/${id}`, data, header);
  return res?.data;
};

export const updateSection = async (
  id: string,
  typeSection: number,
  data: updateSectionType,
) => {
  const res = await api.put(
    `/topik/topik-exam/done/section/${id}/${typeSection}`,
    data,
    header,
  );
  return res?.data;
};
export const getResultCourse = async (id: string) => {
  const res = await api.get(`/topik/topik-exam/detail/${id}`, header);
  return res?.data;
};

export const saveAnwser = async (url: string, data: AnswerSelectProps[]) => {
  const res = await axios.put(url, data);
  return res.status;
};

export const getAnwser = async (url: string) => {
  return (await axios.get(url)).data;
};
