import React from "react";

export default function Score() {
  const [team1, setteam1] = React.useState(0);
  const [team2, setteam2] = React.useState(0);
  const [HomeFoul, setHomeFoul] = React.useState(0);
  const [AwayFoul, setAwayFoul] = React.useState(0);
  const [HomeTimeout, setHomeTimeout] = React.useState(7);
  const [AwayTimeout, setAwayTimeout] = React.useState(7);
  return (
    <div className="score">
      <div>
        <h1>Home</h1>
        <h1>{team1}</h1>
        {team1 > 0 && (
          <button
            onClick={() => setteam1(team1 - 1)}
            className="btn btn-outline-danger "
          >
            <h4>-</h4>
          </button>
        )}
        <button
          onClick={() => setteam1(team1 + 1)}
          className="btn btn-outline-success "
        >
          <h4>+</h4>
        </button>
        <h3>team foul</h3>
        <h3>{HomeFoul}</h3>
        {HomeFoul > 0 && (
          <button
            onClick={() => setHomeFoul(HomeFoul - 1)}
            className="btn btn-outline-danger "
          >
            <h4>-</h4>
          </button>
        )}
        <button
          onClick={() => setHomeFoul(HomeFoul + 1)}
          className="btn btn-outline-success "
        >
          <h4>+</h4>
        </button>
        {HomeFoul > 0 && (
          <button
            onClick={() => setHomeFoul(0)}
            className="btn btn-outline-success "
          >
            reset
          </button>
        )}
        {HomeFoul >= 5 && <h4 className="bonus">Bonus</h4>}
        <h3>Time out left</h3>
        <h3>{HomeTimeout}</h3>
        {HomeTimeout > 0 && (
          <button
            onClick={() => setHomeTimeout(HomeTimeout - 1)}
            className="btn btn-outline-danger "
          >
            -
          </button>
        )}
        {HomeTimeout < 7 && (
          <button
            onClick={() => setHomeTimeout(HomeTimeout + 1)}
            className="btn btn-outline-success "
          >
            +
          </button>
        )}
      </div>
      <div>
        <h1>Away</h1>
        <h1>{team2}</h1>
        {team2 > 0 && (
          <button
            onClick={() => setteam2(team2 - 1)}
            className="btn btn-outline-danger "
          >
            <h4>-</h4>
          </button>
        )}
        <button
          onClick={() => setteam2(team2 + 1)}
          className="btn btn-outline-success "
        >
          <h4>+</h4>
        </button>
        <h3>team foul</h3>
        <h3>{AwayFoul}</h3>
        {AwayFoul > 0 && (
          <button
            onClick={() => setAwayFoul(AwayFoul - 1)}
            className="btn btn-outline-danger "
          >
            <h4>-</h4>
          </button>
        )}
        <button
          onClick={() => setAwayFoul(AwayFoul + 1)}
          className="btn btn-outline-success "
        >
          <h4>+</h4>
        </button>
        {AwayFoul > 0 && (
          <button
            onClick={() => setAwayFoul(0)}
            className="btn btn-outline-success "
          >
            reset
          </button>
        )}
        {AwayFoul >= 5 && <h4 className="bonus">Bonus</h4>}
        <h3>Time out left</h3>
        <h3>{AwayTimeout}</h3>
        {AwayTimeout > 0 && (
          <button
            onClick={() => setAwayTimeout(AwayTimeout - 1)}
            className="btn btn-outline-danger "
          >
            -
          </button>
        )}
        {AwayTimeout < 7 && (
          <button
            onClick={() => setAwayTimeout(AwayTimeout + 1)}
            className="btn btn-outline-success "
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
