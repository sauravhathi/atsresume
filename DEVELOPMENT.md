# Install build environment #

## Arch Linux #
### Install Nodejs and NPM #
Install Nodejs and NPM with this command:
``` bash
$ sudo pacman -S nodejs npm
```

### Build and Install create-react-app #
Build and install create-react-app with these commands:
``` bash
$ wget https://aur.archlinux.org/cgit/aur.git/snapshot/create-react-app.tar.gz
$ tar -xf create-react-app.tar.gz
$ cd create-react-app/
$ makepkg
$ sudo pacman -U create-react-app-4.0.3-1-any.pkg.tar
```

# Obtain the source code #
Clone the sourcecode with these commands:
``` bash
$ git clone https://github.com/sauravhathi/atsresume.git
$ cd atsresume/
```

# Compile ATSResume #
Compile ATSResume with these commands:
``` bash
$ npm install
$ npm run build
```



# Run ATSResume #
Run ATSResume with this command:
``` bash
$ npm start
```
Access ATSResume by opening this page in a web browser:
```
http://127.0.0.1:3000/
```

