import { useState } from "react";

interface FormError {
  name: string | null;
  series: string | null;
  amount: string | null;
}

function OldRequestsPage() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Разыков Михаил",
      series: "A12131234",
      amount: 10000,
    },
    {
      id: 2,
      name: "Иванов Иван",
      series: "A2321234",
      amount: 2000,
    },
    {
      id: 3,
      name: "Петров Петр",
      series: "A31231234",
      amount: 3000,
    },
  ]);

  const [addRequestData, setAddRequestData] = useState({
    name: "",
    series: "",
    amount: "",
  });

  const [errors, setErrors] = useState<FormError>({
    name: null,
    series: null,
    amount: null,
  });

  function handleRequestDataChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAddRequestData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  }

  function handleAddRequest() {
    const error: FormError = {
      name: null,
      series: null,
      amount: null,
    };

    if (addRequestData.name.length === 0) {
      error.name = "ФИО обязательно к заполнению";
    } else if (addRequestData.name.length < 4) {
      error.name = "ФИО должно содержать минимум 3 символа";
    }

    if (addRequestData.series.length === 0) {
      error.series = "Серия паспорта обязательна к заполнению";
    } else if (addRequestData.series.length < 6) {
      error.series = "Серия паспорта должна содержать минимум 5 символов";
    }

    if (addRequestData.amount.length === 0) {
      error.amount = "Сумма обязательна к заполнению";
    } else if (+addRequestData.amount < 1001) {
      error.amount = "Сумма должна быть больше 1000";
    }

    setErrors(error);

    if (error.name || error.series || error.amount) {
      return;
    }

    const newRequest = { ...addRequestData, id: requests.length + 1 };

    const newRequests = [...requests];
    newRequests.push(newRequest);

    setRequests(newRequests);

    setAddRequestData({
      name: "",
      series: "",
      amount: "",
    });
  }

  return (
    <div>
      <h1>Заявки на кредит</h1>

      <p>
        На данной странице вы можете увидеть все заявки, а также добавить новую
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <table border={1}>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Серия паспорта</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.series}</td>
                <td>{request.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h2>Добавить заявку</h2>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleAddRequest();
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="name">ФИО</label>
              <input
                value={addRequestData.name}
                onChange={handleRequestDataChange}
                id="name"
                type="text"
              />

              {errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="series">Серия паспорта</label>
              <input
                value={addRequestData.series}
                onChange={handleRequestDataChange}
                id="series"
                type="text"
              />

              {errors.series && (
                <span style={{ color: "red" }}>{errors.series}</span>
              )}
            </div>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label htmlFor="amount">Сумма</label>
              <input
                value={addRequestData.amount}
                onChange={handleRequestDataChange}
                id="amount"
                type="number"
              />

              {errors.amount && (
                <span style={{ color: "red" }}>{errors.amount}</span>
              )}
            </div>

            <button type="submit">Добавить заявку</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { OldRequestsPage };
