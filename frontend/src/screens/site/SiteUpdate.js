import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWorkoutHandlingAction,
  updateWorkouteHandlingAction,
} from "../../actions/workoutActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { authHeader } from "../../actions/trainerActions";
import "./workoutHandling.css";
import MainScreen from "../../components/MainScreen";

export default function WorkoutHandlingUpdate({ match, history }) {
  const [workoutID, setWorkoutID] = useState("");
  const [name, setName] = useState("");
  const [workoutCategory, setWorkoutCategory] = useState("");
  const [instructions, setInstructions] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [tips, setTips] = useState("");

  const dispatch = useDispatch();
  const trainer_Login = useSelector((state) => state.trainer_Login);
  const { trainerInfo } = trainer_Login;
  const workoutHandlingUpdate = useSelector(
    (state) => state.workoutHandlingUpdate
  );
  const { loading, error } = workoutHandlingUpdate;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteWorkoutHandlingAction(id));
    }
    history.push("/workout-handling-view");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/user/trainer/workout/get/${match.params.id}`,
        {
          headers: authHeader(),
        }
      );

      setWorkoutID(data.workoutID);
      setName(data.name);
      setWorkoutCategory(data.workoutCategory);
      setInstructions(data.instructions);
      setRepetitions(data.repetitions);
      setTips(data.tips);
      console.log(data);
    };

    fetching();
  }, [match.params.id]);

  const updateHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateWorkouteHandlingAction(
        match.params.id,
        workoutID,
        name,
        workoutCategory,
        instructions,
        repetitions,
        tips
      )
    );
    if (
      !workoutID ||
      !name ||
      !workoutCategory ||
      !instructions ||
      !repetitions ||
      !tips
    )
      return;

    history.push("/workout-handling-view");
  };
  if (trainerInfo) {
    return (
      <div className="WorkoutBackgroundUpdate">
        {" "}
        <MainScreen title={"UPDATE A WORKOUT"}>
          <Button
            variant="success"
            style={{
              marginLeft: 10,
              marginBottom: 6,
              float: "left",
              fontSize: 15,
            }}
            size="lg"
            href="/workout-handling-view"
          >
            {" "}
            Back to Workout List
          </Button>
          <br></br>
          <br></br>
          <Card
            style={{
              margin: 50,
              marginLeft: "10%",
              marginRight: "10%",
              width: "80%",
              borderRadius: 45,
              borderWidth: 2.0,
              marginTop: 20,
              paddingInline: 10,
              background: "rgba(231, 238, 238, 0.9)",
            }}
          >
            <br></br>

            <Card.Body>
              <Form onSubmit={updateHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

                <Form.Group controlId="workoutID">
                  <Form.Label>Workout ID</Form.Label>
                  <Form.Control
                    type="workoutID"
                    value={workoutID}
                    placeholder="Enter the Workout ID"
                    onChange={(e) => setWorkoutID(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Label>Workout Name</Form.Label>
                  <Form.Control
                    value={name}
                    placeholder="Enter the  Workout Name"
                    rows={4}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <div className="form-group">
                  <label className="WorkoutCategory">Workout Category</label>
                  <select
                    className="form-control"
                    id="WorkoutCategory"
                    value={workoutCategory}
                    onChange={(e) => setWorkoutCategory(e.target.value)}
                    required
                  >
                    <option>Select Workout Category</option>
                    <option value={workoutCategory.Legs}>Legs</option>
                    <option value={workoutCategory.Chest}>Chest</option>
                  </select>
                </div>

                <Form.Group controlId="instructionsme">
                  <Form.Label>Instructions</Form.Label>
                  <Form.Control
                    as="textarea"
                    type=" "
                    placeholder="Enter the instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="Repetitions">
                  <Form.Label>Repetitions</Form.Label>
                  <Form.Control
                    type="number"
                    value={repetitions}
                    min="1"
                    max="20"
                    placeholder=""
                    onChange={(e) => setRepetitions(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="tips">
                  <Form.Label>Tips</Form.Label>
                  <Form.Control
                    type="tips"
                    value={tips}
                    placeholder="Enter the tips"
                    onChange={(e) => setTips(e.target.value)}
                  />
                </Form.Group>
                <br></br>
                {loading && <Loading size={50} />}
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                <Button
                  className="mx-2"
                  variant="danger"
                  onClick={() => deleteHandler(match.params.id)}
                >
                  Delete
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <br></br>
          <br></br>
        </MainScreen>
      </div>
    );
  } else {
    return (
      <div className="denied">
        <MainScreen />
        <br></br>
      </div>
    );
  }
}
