const express = require('express')
const nodemailer = require('nodemailer')

const MailSender = (req,res) => {
    const Transporter = nodemailer.createTransport({
        service :'gmail',
        auth :{
            user : "powerx783058@gmail.com",
            pass : "ulvf djby jwbs dbpn"
        }
    })
    const MailOptions = {
        from : "powerx783058@gmail.com",
        to:req.body.email,
        subject:"Checking Nodemailer",
        text : "It is Working!"
    }

    Transporter.sendMail(MailOptions,(err,info) => {
        if (err)
        {
            return res.status(500).json(err)
        }
        return res.status(200).json('Mail Sent Successfully')
    })
}

exports.MailSender = MailSender;
