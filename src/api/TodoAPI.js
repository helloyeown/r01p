import axios from "axios"

const server = "http://localhost:8080/api/todos"

// axios 통신 코드
export const getList = async() => {

    // async 함수의 결과 값은 항상 promise
    const res = await axios.get(`${server}/list`);
    return res.data

}