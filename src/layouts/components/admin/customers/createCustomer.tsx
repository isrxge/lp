"use client";

import React, { useState } from "react";

import { useForm } from "@mantine/form";

import Image from "next/image";

import { TextInput, Button, Box, Grid, Col } from "@mantine/core";

import { addCustomer } from "@/lib/createData";

import { useSession } from "next-auth/react";

import ToastGenerator from "@/lib/toast-tify";

function CustomerForm({ refreshCustomer }) {
  const [selectedImage, setSelectedImage] = useState(null);

  let { data: session, status } = useSession();

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Updated type declaration

  const [isSucess, setIsSucess] = useState(false);

  const [imagePreview, setImagePreview] = useState("");

  const [sucessMessage, setSucessMessage] = useState("");

  const form = useForm({
    initialValues: {
      name: "",

      src: "",
    },
  });

  const onImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);

    const imageUrl = URL.createObjectURL(file);

    setImagePreview(imageUrl);
  };

  const onSubmitForm = async (values) => {
    if (selectedImage) {
      const formData = new FormData();

      formData.append("file", selectedImage);

      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/derjssgq9/image/upload",

          {
            method: "POST",

            body: formData,
          },
        );

        const data = await response.json();

        values.src = data.secure_url; // Save the uploaded image URL to the form data
      } catch (error) {
        console.error(error);
      }
    }

    // Continue with the rest of the form submission

    let returnResult = await addCustomer(values, session);

    if (returnResult.success != undefined) {
      showToast(returnResult.msg);

      refreshCustomer();
    }

    form.reset();
  };

  const showToast = (msg) => {
    setIsSucess(true);

    setSucessMessage(msg);

    setTimeout(() => {
      setIsSucess(false);

      setSucessMessage("");
    }, 10000);
  };

  return (
    // <div style={{ maxHeight: "500px", overflowY: "auto" }}>

    <div className="container">
      {isSucess ? <ToastGenerator message={sucessMessage} /> : <></>}

      <Box maw={"100%"} mx="auto">
        <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
          <h3 className="flex justify-center">Add new customer</h3>

          {imagePreview && (
            <div className="flex justify-center">
              <Image
                src={imagePreview}
                alt="Preview"
                width="350"
                height="350"
              />
            </div>
          )}

          <Grid gutter="lg">
            <Col span={12}>
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
            </Col>

            <Col span={6}>
              <input type="file" accept="image/*" onChange={onImageChange} />
            </Col>

            <Col span={6} className="flex justify-end mt-6">
              {/* Thêm class CSS để đặt nút submit ở góc phải */}

              <Button
                type="submit"
                style={{ backgroundColor: "blue" }}
                size="md"
              >
                Submit
              </Button>
            </Col>
          </Grid>
        </form>

        {successMessage && (
          <div style={{ marginTop: "16px", color: "green" }}>
            {successMessage}
          </div>
        )}
      </Box>
    </div>

    // </div>
  );
}

export default CustomerForm;
