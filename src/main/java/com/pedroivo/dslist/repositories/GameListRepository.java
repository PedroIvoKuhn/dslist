package com.pedroivo.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pedroivo.dslist.entities.GameList;

public interface GameListRepository extends JpaRepository<GameList, Long> {

}