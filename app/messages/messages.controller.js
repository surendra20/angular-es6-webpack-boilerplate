﻿export default class MessagesCtrl {
    constructor($scope, logger, messageService) {
        this.messages = [];
        this.messageService = messageService;
        this.logger = logger;

        this.activate();
    }

    activate() {
        return this.loadMessages().then(()=> {
            this.logger.info('init Home View');
        });
    }


    loadMessages() {
        return this.messageService.findAll().then(response=> {
            this.messages = response;

            return this.messages;
        });
    }
}

MessagesCtrl.$inject = ['$scope', 'logger', 'messageService'];