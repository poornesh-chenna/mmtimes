import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('server is running')
})
app.post('/send-email', (req, res) => {
  const { name, email, message, subject } = req.body

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail'
    auth: {
      user: 'poorneshchenna29@gmail.com',
      pass: 'qecb vnzz egoz hcke',
    },
  })

  const mailOptions = {
    from: email,
    to: 'poorneshchenna29@gmail.com', // Your email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      res.status(500).send('Error: Unable to send email')
    } else {
      console.log('Email sent: ' + info.response)
      res.status(200).send('Email sent successfully')
    }
  })
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
