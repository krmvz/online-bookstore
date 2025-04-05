import { useState } from "react";
import { Button, Grid,  Table, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  series: string;
  amount: string | number;
}

function RequestsPage() {
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

  const { register, handleSubmit, formState, reset } = useForm<FormData>();

  function handleAddRequest(data: FormData) {
    const newRequest = { ...data, id: requests.length + 1 };

    const newRequests = [...requests];
    newRequests.push(newRequest);

    setRequests(newRequests);

    reset();
  }

  return (
    <div>
      <h1>Заявки на кредит</h1>

      <p>
        На данной странице вы можете увидеть все заявки, а также добавить новую
      </p>

      <Grid>
        <Grid.Col span={7}>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>ФИО</Table.Th>
                <Table.Th>Серия паспорта</Table.Th>
                <Table.Th>Сумма</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {requests.map((request) => (
                <Table.Tr key={request.id}>
                  <Table.Td>{request.name}</Table.Td>
                  <Table.Td>{request.series}</Table.Td>
                  <Table.Td>{request.amount}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Grid.Col>
        <Grid.Col span={5}>
          <h2>Добавить заявку</h2>

          <form
            onSubmit={handleSubmit(handleAddRequest)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              textAlign: "left",
            }}
          >
            <TextInput
              id="name"
              label="ФИО"
              withAsterisk
              error={formState.errors.name?.message}
              {...register("name", {
                required: "ФИО обязательное поле",
                minLength: {
                  value: 3,
                  message: "ФИО должно быть не менее 3 символов",
                },
              })}
            />

            <TextInput
              id="series"
              label="Серия паспорта"
              withAsterisk
              error={formState.errors.series?.message}
              {...register("series", {
                required: "Серия паспорта обязательное поле",
                minLength: {
                  value: 5,
                  message: "Серия паспорта должна быть не менее 5 символов",
                },
              })}
            />

            <TextInput
              id="amount"
              label="Сумма"
              withAsterisk
              error={formState.errors.amount?.message}
              {...register("amount", {
                required: "Сумма обязательное поле",
                min: {
                  value: 1000,
                  message: "Сумма должна быть не менее 1000",
                },
              })}
            />

            <Button size="lg" type="submit" color="green">
              Создать заявку
            </Button>
          </form>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export { RequestsPage };
