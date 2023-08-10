import { useCallback, useEffect, useMemo, useState } from "react";

function createUser(firstName, lastName) {
  const user = { firstName, lastName };

  console.log(user);

  return user;
}

export function Example4() {
  const [counter, setCounter] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("Hello World!");

  const user = useMemo(
    () => createUser(firstName, lastName),
    [firstName, lastName]
  );

  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [message]);

  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setCounter(counter + 1)}
      >
        На мене клікнули {counter} разів
      </div>
      <input
        style={{
          display: "block",
          marginTop: 10,
          marginBottom: 10,
          border: "1px solid black",
        }}
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        style={{
          display: "block",
          border: "1px solid black",
          marginBottom: 10,
        }}
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <pre>{JSON.stringify(user, null, 2)}</pre>;
    </div>
  );
}
