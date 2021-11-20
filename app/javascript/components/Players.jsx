import React from 'react'
import { Table, message, Popconfirm } from 'antd'
import AddPlayerModal from './AddPlayerModal'

class Beers extends React.Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "",
      key: "action",
      render: (_text, record) => (
        <Popconfirm 
          title="Delete this player from the active roster?"
          onConfirm={() => this.deletePlayer(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <a href="#" type="danger">Delete{" "}</a>
        </Popconfirm>
      )
    }
  ]

  state = {
    players: [],
  }

  loadPlayers = () => {
    const url = 'api/v1/players/index'
    fetch(url)
      .then((data) => {
        if (data.ok) {
          return data.json()
        }
        throw new Error("Network Error.")
      })
      .then((data) => {
        data.forEach((player) => {
          const newEl = {
            key: player.id,
            id: player.id,
            name: player.name,
            position: player.position,
            number: player.number
          }
          this.setState((prevState) => ({
            players: [...prevState.players, newEl],
          }))
        })
      })
      .catch((err) => message.error("Error: " + err))
  }

  deletePlayer = (id) => {
    const url = `api/v1/players/${id}`

    fetch(url, {
      method: "delete",
    })
      .then((data) => {
        if (data.ok) {
          this.reloadPlayers()
          return data.json()
        }
        throw new Error("Network error.")
      })
      .catch((err) => message.eror("Error: " + err))
  }

  reloadPlayers = () => {
    this.setState({ players: [] })
    this.loadPlayers()
  }

  render() {
    return (
      <>
        <Table
          className="table-striped-rows"
          dataSource={this.state.players}
          columns={this.columns}
          pagination={{ pageSize: 11 }}
        />

        <AddPlayerModal 
          reloadPlayers={this.reloadPlayers}
        />
      </>
    )
  }
}