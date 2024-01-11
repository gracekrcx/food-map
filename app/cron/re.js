export default (req, res) => {
  console.log('Testing-v1');
  res.status(200).json({ text: 'Hello' });
};
