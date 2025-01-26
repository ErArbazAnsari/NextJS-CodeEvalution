export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container">
        {props.modal}
        {props.children}
      </div>
    </>
  );
}
