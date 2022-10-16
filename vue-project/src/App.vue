<script>

export default {
  data() {
    return {
      messages: [
      ],
      newMessage: "",
      ws: WebSocket
    }
  },
  methods: {
    sendMessage() {
      console.log("send message: " + this.newMessage)
      this.ws.send(this.newMessage)
      this.newMessage = ""
    },
    getMessage(ev) {
      var data = ev.data
      console.log("data:" + data)
      var msg = JSON.parse(data)
      this.messages.push({sender: msg.sender, content: msg.content})
    },
    open() {
      this.messages.push({content: "/The socket connection has been established"})
    },
    closed() {
      this.messages.push("/The socket connection has been closed")
    },
    createWebSocket() {
      this.ws = new WebSocket("ws://localhost:12345/ws")
      this.ws.onmessage = this.getMessage
      this.ws.onopen = this.open
      this.ws.onclosed = this.closed
    }
  },
  created() {
    this.createWebSocket()
  }
}


</script>
<template>
  <div>
    <ul id="messages">
      <li v-for="message in messages" :key="message.id">
        <span>{{message.sender}}: {{message.content}}</span>
      </li>
    </ul>
  </div>
  <div>
    <input v-model="newMessage" placeholder="Type message here" @keyup.enter="sendMessage" />
    <button type="button" @click="sendMessage">Send</button>
  </div>
</template>

<style>
#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages li {
  padding: 10px 10px;
}

#messages li:nth-child(odd) {
  background: #eee;
}

input {
  padding: 10px;
  width: 90%;
  margin-right: .5%;
}

button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}
</style>