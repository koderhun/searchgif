import React, { useState, useEffect } from "react"
import { Form, Input, Button, Radio } from "antd"
import { useRu2enMutation } from "../../redux/api"
import styles from "./styles.module.scss"

export const SearchForm = ({ changeSearch }) => {
  const [form] = Form.useForm()
  const [ru2en] = useRu2enMutation()
  const [englishText, setEnglishText] = useState("")

  const handleTranslate = async (text) => {
    const res = await ru2en(text).unwrap()
    setEnglishText(res.translatedText)
  }

  const onFinish = ({ searchText }) => {
    if (/^[a-zA-Z]+$/.test(searchText)) {
      console.log("en")
      setEnglishText(searchText)
    } else {
      console.log("ru")
      handleTranslate(searchText)
    }

    form.resetFields()
  }

  useEffect(() => {
    changeSearch(englishText)
  }, [englishText])

  return (
    <Form
      form={form}
      name="searchForm"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        remember: false
      }}
      className={styles.searchForm}
    >
      <Form.Item name="searchText">
        <Input placeholder="Search input" />
      </Form.Item>
      <div className={styles.englishText}>English Text: {englishText}</div>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}
