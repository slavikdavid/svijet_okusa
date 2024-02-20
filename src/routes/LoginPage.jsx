import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Field } from "formik";
import {
  Box,
  Heading,
  Center,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function App() {
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box
        bg={useColorModeValue("gray.50", "gray.700")}
        p={6}
        rounded="md"
        w={72}
      >
        <Center>
          <Heading p={6}>{t("login")}</Heading>
        </Center>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            rememberMe: false,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email && !values.username) {
              errors.email = t("required");
              errors.username = t("required");
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (isRegister) {
              console.log("Registering with: ", values);
            } else {
              console.log("Logging in with: ", values);
            }
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">
                    {isRegister
                      ? t("email_label")
                      : `${t("email_label")}/${t("username_label")}`}
                  </FormLabel>{" "}
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                {isRegister && (
                  <FormControl>
                    <FormLabel htmlFor="username">
                      {t("username_label")}
                    </FormLabel>{" "}
                    <Field
                      as={Input}
                      id="username"
                      name="username"
                      type="text"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  </FormControl>
                )}
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">
                    {t("password_label")}
                  </FormLabel>{" "}
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                {isRegister && (
                  <FormControl
                    isInvalid={
                      !!errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="confirmPassword">
                      {t("confirm_password_label")}
                    </FormLabel>{" "}
                    <Field
                      as={Input}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      variant="filled"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
                <Field as={Checkbox} id="rememberMe" name="rememberMe">
                  {t("remember_me_label")}
                </Field>
                <Button type="submit" colorScheme="orange" width="full">
                  {isRegister ? t("register_button") : t("login_button")}
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
        <Button
          mt={6}
          variant="link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? t("already_have_account") : t("create_an_account")}
        </Button>
      </Box>
    </Flex>
  );
}
