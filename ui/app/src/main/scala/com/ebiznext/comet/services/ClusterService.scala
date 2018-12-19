package com.ebiznext.comet.services

import java.nio.file.Path

import com.ebiznext.comet.model.CometModel.Cluster

import scala.concurrent.Future

/**
 * Created by Mourad on 30/07/2018.
 */
class ClusterService {

  def create(userId: String, cluster: Cluster): Future[Option[String]] = ???

  def retrieve(userId: String, clusterId: String): Future[Option[Cluster]] = ???

  def delete(userId: String, clusterId: String): Future[Unit] = ???

  def update(userId: String, clusterId: String, newCluster: Cluster): Future[Option[String]] = ???

  def clone(userId: String, clusterId: String, tagsOnly: Boolean): Future[Option[String]] = ???

  def buildAnsibleScript(userId: String, clusterId: String): Future[Option[Path]] = ???

}

object ClusterService extends ClusterService