import React, { useState, useEffect } from "react"
import { Form, Input, Button, Radio, Spin } from "antd"
import { useRu2enMutation } from "../../redux/api"
import styles from "./styles.module.scss"

const { Search } = Input

export const SearchForm = ({ changeSearch }) => {
  const [form] = Form.useForm()
  const [ru2en, { isLoading }] = useRu2enMutation()
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
      initialValues={{
        remember: false
      }}
      className={styles.searchForm}
    >
      <Form.Item name="searchText">
        <Search
          placeholder="Введите фразу на русском или на английском"
          enterButton="Поиск"
          size="large"
          onSearch={(searchText) => onFinish({ searchText })}
        />
      </Form.Item>

      <div className={styles.englishText}>
        <div className={styles.head}>Текст на английском:</div>
        <div className={styles.transText}>
          {isLoading ? <Spin /> : englishText}
        </div>
      </div>
    </Form>
  )
}
