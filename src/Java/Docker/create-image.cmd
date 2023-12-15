docker build --no-cache -f SQL\Dockerfile.PostgreSql -t logistikakr-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t logistikakr-java/app ../../..
