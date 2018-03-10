/*
app.get('/', (req, res) => {
    db.getNodes()
        .then((nodes) => {
            res.render('', { nodes });
        })
        .catch(error => res.status(500).send(error));
});

app.post('/', (req, res) => {
    const name = req.body.name;
    db.createNode(name)
        .then(() => res.redirect('/'))
        .catch(error => res.status(500).send(error));
});

app.post('/clear', (req, res) => {
    db.clearNodes()
        .then(() => res.redirect('/'))
        .catch(error => res.status(500).send(error));
});
*/
