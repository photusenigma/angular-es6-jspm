import githubContributorsTemplate from './github_contributors.html.tmpl!text';

class GitHubContributors {

  constructor() {
    this.template= githubContributorsTemplate;
    this.scope = {};
    this.controller = 'GitHubCtrl';
    this.controllerAs = 'ghc';
    this.bindToController= true;
  }

  link(scope, element, attr, ctrl) {
    // do something what can't be done in controller
  }

  static directiveFactory(){
    GitHubContributors.instance = new GitHubContributors();
    return GitHubContributors.instance;
  }

}

//GitHubContributor.directiveFactory.$inject = [];

export { GitHubContributors };
