import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteMatchThunk } from "../../redux/thunks/matchThunk";
import { MatchInterface } from "../../utils/types/matchInterface";

const MatchCard = ({
  gameTitle,
  image,
  date,
  maxPlayers,
  players,
  location,
  id,
}: MatchInterface): JSX.Element => {
  const dispatch = useDispatch();

  const deleteMatch = (id: string) => {
    dispatch(deleteMatchThunk(id));
  };

  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img className="card__gameimage" src={image} alt={gameTitle} />
        <CardDate className="card__gamedate">
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
          }).format(Date.parse(date))}
        </CardDate>
        <CardGameTitle className="card__gametitle">{gameTitle}</CardGameTitle>

        <CardPlayersWrapper>
          {Array.from(Array(maxPlayers)).map((player, index) => (
            <CardPlayers key={index} className="card__players">
              <img
                className="card__players--playerimage"
                src={
                  "https://cdn.icon-icons.com/icons2/390/PNG/512/meeple_38522.png"
                }
                alt={"player"}
              />
            </CardPlayers>
          ))}
        </CardPlayersWrapper>

        <CardLocation className="card__location">
          <p className="card__location--city">{location}</p>
        </CardLocation>
        <p className="card__delete" onClick={() => deleteMatch(id)}>
          DELETE
        </p>
      </Cardbody>
    </Card>
  );
};

export default MatchCard;

const Card = styled.li`
  list-style: none;
  max-width: 330px;
  min-width: 330px;
  min-height: 280px;
  margin: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 1px 3px 20px #9e9e9e;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 200ms ease-in;

  img {
    height: 10rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Cardbody = styled.article`
  padding: 1rem;

  .card__delete {
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.lightText};
    &:hover {
      color: #000;
    }
  }
`;

const CardDate = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
`;

const CardGameTitle = styled.h2`
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin: 0.3rem 0;
`;

const CardPlayersWrapper = styled.article`
  display: flex;
`;

const CardPlayers = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;

  .card__players--playerimage {
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 0.2rem;
    border-radius: 20%;
    border: 1.5px solid ${(props) => props.theme.lightText};
    object-fit: cover;
  }
`;

const CardLocation = styled.div`
  font-weight: 400;
  margin: 0.5rem 0;
  color: ${(props) => props.theme.lightText};
`;
