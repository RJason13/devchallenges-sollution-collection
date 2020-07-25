#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate:$1

# navigate into the build output directory
cd dist

if [$1 == "gh-pages"] 
    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git add -A
    git commit -m 'deploy'

    git push -f git@github.com:RJason13/devchallenges-solution-collection.git master:gh-pages
fi

cd -