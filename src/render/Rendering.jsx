import { memo } from 'react'

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

export const Rendering = memo((props) => {
  const { open } = props;
  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("子要素がレンダリングされた！")
  })

  return(
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});