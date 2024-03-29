import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import bodyParser from 'body-parser'
import multer from 'multer'

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

const upload = multer({
  storage: multer.memoryStorage(),
})

app.post('/send-application', upload.single('resume'), async (req, res) => {
  const { name, email, message, subject } = req.body
  const resume = req.file

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'poorneshchenna29@gmail.com',
      pass: 'qecb vnzz egoz hcke',
    },
  })

  const mailOptions = {
    from: email,
    to: 'poorneshchenna29@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\n ${message}`,
    attachments: [
      {
        filename: resume.originalname,
        content: resume.buffer,
      },
    ],
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
    res.status(200).send('Email sent successfully')
  } catch (error) {
    console.error('Error occurred while sending email:', error)
    res.status(500).send('Error: Unable to send email')
  }
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
