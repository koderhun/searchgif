import React from "react"
import { Spin, Alert } from "antd"

export const UtilsPage = ({ status, error }) => {
  return (
    <>
      {status === "loading" && (
        <div className="loader">
          <Spin size="large" />
        </div>
      )}
      {error && (
        <Alert
          message="Error"
          description="Ошибка запроса."
          type="error"
          showIcon
        />
      )}
    </>
  )
}
