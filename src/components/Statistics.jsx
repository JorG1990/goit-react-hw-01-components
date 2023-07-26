
import PropTypes from "prop-types";
import { SectionContenedor, ListUl, TitleStatistics, Label, Percentage, List} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return(
    <SectionContenedor className="statistics">
    {title && <TitleStatistics className="title">{title}</TitleStatistics>}

    <ListUl className="stat-list">
      {stats.map((stat) => (
        <List className="item" key={stat.id}
           style={{ backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, 0.5)` }}>
          <Label className="label">{stat.label}</Label>
          <Percentage className="percentage">{stat.percentage}%</Percentage>
        </List>
      ))}
    </ListUl>
  </SectionContenedor>
)};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
