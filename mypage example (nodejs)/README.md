# Node.js and MongoDB :thumbsup:

## Reference: https://www.youtube.com/watch?v=1NrHkjlWVhM

### 1. **Infomation :eyes:**

- Server: Node.js (expess)
- Database: MongoDB (mongoose)

### 2. **:star2: Node.js environment**

:heavy_check_mark: To start the node server :heart_eyes:

```
npm run devStart
```

:heavy_check_mark: Needed moudules are...

```
npm install express
npm install --save-dev nodemon
npm install ejs
npm install mongoose
npm install method-override
npm install slugify
npm install marked
npm install jsdom
```

- mongoose: MongoDB itself. You have to install MongoDB Server in order to use mongoose.
- method-override: enables to use DELETE, PUT, PATCH as well as GET, POST

### 3. **:file_folder: Directory Structure**

:heavy_check_mark: Follow MVC (model, view, controll) model.

> ##### node_modules (directory)
>
> ##### models (directory)
>
> > mypage.js
>
> ##### routes (directory)
>
> > mypage.js
>
> ##### views (directory)
>
> > ###### mypage (directory)
> >
> > > _form_fields.ejs
> > > edit.ejs
> > > mypage.ejs (the role of index.ejs)
> > > show.ejs
> > > write.ejs_
>
> package-lock.json
> package.json
> README.md
> server.js
