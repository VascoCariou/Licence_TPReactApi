import Information from "../Composants/Information";

const HomeInformation = (props) => {
  console.log(props.nomPerso);
  return (
    <div>
      <Information nom={props.nom} />
    </div>
  );
};

export default HomeInformation;
