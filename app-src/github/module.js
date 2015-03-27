import angular from 'angular';

import { GitHubService } from './GitHubService';
import { GitHubCtrl } from './GitHubCtrl';
import { GitHubContributors } from './GitHubContributors';
import { GitHubProvider } from './GitHubProvider';

import githubTemplate from './github.html.tmpl!text';

let gitHubModule = angular.module('gitHubModule', [])
  .factory('GitHubService', GitHubService.gitHubFactory)
  .controller('GitHubCtrl', GitHubCtrl)
  .directive('githubContributors', GitHubContributors.directiveFactory)
  .provider('GitHub', GitHubProvider);

gitHubModule.config(GitHubProvider => {
  GitHubProvider.setUrl('https://api.github.com');
});


gitHubModule.routeInfo = { template: githubTemplate };

export { gitHubModule };
