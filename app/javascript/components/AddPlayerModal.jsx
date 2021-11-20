import React from 'react'
import { Button, Form, Input, Modal, Select } from 'antd'

const { Option } = Select

class AddPlayerModal extends React.Component {
  formRef = react.createRef()
  state = {
    visible: false
  }

  onFinish = (values) => {
    const url = 'api/v1/players'
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => {
        if (data.ok) {
          this.handleCancel()

          return data.json()
        }
        throw new Errpr("Network Error.")
      })
      .then(() => {
        this.props.reloadPlayers()
      })
      .catch((err) => console.error("Error: " + err))
  }

  showModal = () => {
    this.setState({
      visible: true,
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  render () {
    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
        >
          Create New +
        </Button>

        <Modal
          title="Add a player"
          visible={this.setState.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            ref={this.formRef}
            layout="vertical"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[ 
                {
                  required: true,
                  message: "Input the player name"
                }
              ]}
            >
              <Input placeholder="Player's Name" />
            </Form.Item>

            <Form.Item
              name="position"
              label="Position"
              rules={[ 
                {
                  required: true,
                  message: "Add player's position"
                }
              ]}
            >
              <Select 
                showSearch 
                placeholder="Player's Position"
                optionFilterProp="children"
                style={{ width: "100%" }}
              >
                <Option value="C">C</Option>
                <Option value="C/G">C/G</Option>
                <Option value="CB">CB</Option>
                <Option value="DE">DE</Option>
                <Option value="DT">DT</Option>
                <Option value="G">G</Option>
                <Option value="G/T">G/T</Option>
                <Option value="K">K</Option>
                <Option value="lb">LB</Option>
                <Option value="LS">LS</Option>
                <Option value="OT">OT</Option>
                <Option value="P">P</Option>
                <Option value="QB">QB</Option>
                <Option value="RB">RB</Option>
                <Option value="S">S</Option>
                <Option value="T">T</Option>
                <Option value="T/G">T/G</Option>
                <Option value="TE">TE</Option>
                <Option value="WR">WR</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="number"
              label="#"
              rules={[ 
                {
                  required: true,
                  message: "Add player's number"
                }
              ]}
            >
              <Input placeholder="Player's Number" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}

export default AddPlayerModal