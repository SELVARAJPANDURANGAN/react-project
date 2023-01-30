export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "30px",
    width: "300px",
    margin: "10px",
  };
  return (
    <div style={styles}></div>);
}
