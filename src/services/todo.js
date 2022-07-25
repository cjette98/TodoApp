import {serializeError} from '../helpers/serializeError';
import {coreApi} from '../config/config';

// GET

export const getTask = async () => {
  try {
    let response = await coreApi.get(`tasks`);
    let {code, message, data} = response.data;
    return {
      code,
      message,
      data,
    };
  } catch (error) {
    if (error.response) {
      throw serializeError(error.response);
    } else {
      throw new Error('API ERROR' + error);
    }
  }
};

export const createTask = async body => {
  try {
    let response = await coreApi.post(`tasks`, body);
    let {code, message, data} = response.data;
    return {
      code,
      message,
      data,
    };
  } catch (error) {
    if (error.response) {
      throw serializeError(error.response);
    } else {
      throw new Error('API ERROR' + error);
    }
  }
};

//UPDATE
export const updateTask = async (id, body) => {
  try {
    let response = await coreApi.put(`tasks/${id}`, body);
    let {code, message, data} = response.data;
    return {
      code,
      message,
      data,
    };
  } catch (error) {
    if (error.response) {
      throw serializeError(error.response);
    } else {
      throw new Error('API ERROR' + error);
    }
  }
};

//VIEW LOCATION

//UPDATE
export const getLocation = async () => {
  try {
    let response = await coreApi.get(`checkins`);
    let {code, message, data} = response.data;
    return {
      code,
      message,
      data,
    };
  } catch (error) {
    if (error.response) {
      throw serializeError(error.response);
    } else {
      throw new Error('API ERROR' + error);
    }
  }
};

export {getTask, createTask, updateTask, getLocation};
