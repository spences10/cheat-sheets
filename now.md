# now 

Config stuff I always forget!

## Environment variables

If it's keys, then use secrets and configure them in the `package.json`:

```json
 "now": {
    "alias": "cool",
    "env": {
      "AWS_ACCESS_KEY_ID": "@aws_access_key_id",
      "AWS_SECRET_ACCESS_KEY": "@aws_secret_access_key",
      "MONGODB_URI": "@mongodb_uri",
      "S3_BUCKET_NAME": "@s3_bucket_name",
      "SECRET": "@secret"
    }
  },
```

If you have a lot of configuration variables and you dont want to make a mess in the `package.json`:

```shell
now -E
```

That will pull your `.env` file and use that in place of adding individual vars via `now -e var`. I have always used `dotenv` and I understand that `now` uses `dotenv` for this and using without is untested by me?


