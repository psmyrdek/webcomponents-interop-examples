export const initAngularApp = () => {

    angular
        .module('app', [])
        .component('angularClock', {
            template: `
                <div>
                    <p>Aktualny czas to <strong>{{ $ctrl.timeNow }}</strong></p>            
                </div>
            `,
            controller: function($interval) {

                var $ctrl = this;

                $ctrl.$onInit = function() {
                    updateTime();
                    $interval(() => {
                        updateTime();
                    }, 1000)
                }

                function updateTime() {
                    $ctrl.timeNow = new Date().toLocaleTimeString();
                }

            }
        })

    angular.bootstrap(document.querySelector('#angular-app'), ['app'])

}