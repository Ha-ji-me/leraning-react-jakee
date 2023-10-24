import axios from "axios"

export const AxiosTest = () => {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  const onClickUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/4").then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <button onClick={ onClickUsers }>users</button>
      <button onClick={ onClickUser1 }>id=1のuser</button>
    </div>
  )
}