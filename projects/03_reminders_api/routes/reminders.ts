import {Router} from 'express';
import CreateReminderDto from '../dto/create-reminder';
import Reminder from '../models/reminder';

const reindersRouter = Router();
const reminders: Reminder[] = [];

reindersRouter.get('/', (req, res) => {
  res.json(reminders);
});



reindersRouter.post('/', (req, res) => {
  const {title} = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});


export default reindersRouter;