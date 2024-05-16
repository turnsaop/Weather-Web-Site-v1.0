import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const weatherTranslations = {
  Rain: "Жаңбыр",
  Clouds: "Бұлтты",
  Clear: "Ашық",
  Snow: "Қар",
  Thunderstorm: "Найзағай",
  Drizzle: "Себелеп жаңбыр жауу",
  Mist: "Тұман",
  Smoke: "Түтін",
  Haze: "Думан",
  Dust: "Шаң",
  Fog: "Тұман",
  Sand: "Құм",
  Ash: "Күл",
  Squall: "Сквал",
  Tornado: "Торнадо"
};

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) => {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Шынайы сезім",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Ылғалдылық",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Жел",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`,
    },
  ];

  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Күннің шығуы",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Күннің батуы",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "Жоғары",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Төмен",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{weatherTranslations[details] || details}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img src={icon} alt="weather icon" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div
              key={id}
              className="flex font-light text-sm items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light ml-1">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
