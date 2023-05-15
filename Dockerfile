FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN sed -i 's/switch (typeUrl) {/switch (typeUrl) {\n        case "\/ethermint.types.v1.EthAccount": {\n            const baseAccount = auth_1.ModuleAccount.decode(value).baseAccount;\n            (0, utils_1.assert)(baseAccount);\n            return accountFromBaseAccount(baseAccount);\n        }\n        \/\/ auth/' /usr/src/app/node_modules/@cosmjs/stargate/build/accounts.js


EXPOSE 8080
CMD [ "npm", "run","start" ]