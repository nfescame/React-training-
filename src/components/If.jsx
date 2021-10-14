export default function VerifyParImpar(props) {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
}
