import React, { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import { loadMessage } from "@/lib/loadData";

interface Message {
  _id: string;

  name: string;

  email: string;
  message: string;
}

function MessageTable() {
  const [messageData, setMessageData] = useState<Message[]>([]);
  useEffect(() => {
    const fetchNew = async () => {
      if (messageData.length == 0) {
        const partnerCheck = await loadMessage();
        setMessageData(partnerCheck.partner);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const rows = messageData.map((partner, index) => (
    <tr key={partner._id}>
      <td>{index + 1}</td>

      <td>{partner.name}</td>

      <td>{partner.email}</td>

      <td> {partner.message}</td>
    </tr>
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Name</th>

            <th>From</th>

            <th>Message</th>
          </tr>
        </thead>

        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default MessageTable;