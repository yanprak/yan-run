import { BACKEND_API } from './index';

interface CreateFeedbackRequestData {
  email: string,
  message: string,
}

interface CreateFeedbackResponseData {
  message: string,
  result?: {
    email: string,
    message: string,
  }
}

const createFeedback = (
  data: CreateFeedbackRequestData,
) => BACKEND_API.post<CreateFeedbackResponseData>('/feedback', JSON.stringify(data));

// eslint-disable-next-line import/prefer-default-export
export { createFeedback };
